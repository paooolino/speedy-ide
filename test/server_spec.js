import expect from 'expect';
import request from 'request';
import fs from 'fs';
import http from 'http';
import path from 'path';

import server from '../server';

const config = require('../config.js');
const API_ENDPOINT = config.SERVER_HOST + ':' + config.SERVER_PORT; 

describe('Servet test', () => {

	/**
	 *	setup/teardown
	 */	
	 
	before(() => {
		const path = __dirname + '/tmp';
		fs.mkdirSync(path);
		fs.writeFileSync(path + '/file1.txt', 'file1');
		fs.writeFileSync(path + '/file2.txt', 'file2');
		fs.mkdirSync(path + '/dir');
		fs.writeFileSync(path + '/dir/file3.txt', 'file3');
	});
	
	after(() => {
		const path = __dirname + '/tmp';
		fs.unlinkSync(path + '/file1.txt');
		fs.unlinkSync(path + '/file2.txt');
		fs.unlinkSync(path + '/dir/file3.txt');
		fs.rmdirSync(path + '/dir');
		fs.rmdirSync(path);

		server.close();
	});
	
	/**
	 *	tests
	 */
	 
	it('sends CORS header for GET requests', (done) => {
		request.get(API_ENDPOINT, (error, response, body) => {
			expect(response.headers['access-control-allow-origin']).toBe('*');
			done();
		});
	});
	
	it('sends CORS header for POST requests', (done) => {
		request.post({url: API_ENDPOINT}, (error, response, body) => {
			expect(response.headers['access-control-allow-origin']).toBe('*');
			done();
		});
	});

	it('list the content of a directory', (done) => {
		/**
		 *	@param action The action name
		 *	@param path The absolute path to the directory (without trailing slash)
		 */
		const the_path = path.join(config.PROJECT_ROOT, 'speedy-ide/test/tmp');
		request.get(API_ENDPOINT + '/?action=listFiles&path=' + the_path, (error, response, body) => {
			const json = JSON.parse(body);
			const expectedNames = ['dir', 'file1.txt', 'file2.txt'];
			const expectedDirs = [true, false, false];
			expect(expectedNames).toEqual(json.map((entry) => entry.name));
			expect(expectedDirs).toEqual(json.map((entry) => entry.isDirectory));
			done(); 
		});
	});
	
	it('loads a file', (done) => {
		/**
		 *	@param action The action name
		 *	@param path The absolute path to the file
		 */
		const the_path = path.join(config.PROJECT_ROOT, 'speedy-ide/test/tmp/file1.txt');
		request.get(API_ENDPOINT + '/?action=openFile&path=' + the_path, (error, response, body) => {
			expect(body).toBe('file1');
			done();
		});
	});
	
	it('saves a file', (done) => {
		/**
		 *	@param action The action name
		 *	@param filename The absolute path to the file
		 *	@param content The content to be written in the file
		 */
		const the_path = path.join(config.PROJECT_ROOT, 'speedy-ide/test/tmp/file1.txt');
		const data = {
			action: 'saveFile',
			filename: the_path,
			content: 'saved content'
		};
		request.post({
			url: API_ENDPOINT,
			form: data
		}, (error, response, body) => {
			expect(response.statusCode).toBe(200);
			request.get(API_ENDPOINT + '/?action=openFile&path=' + the_path, (error, response, body) => {
				expect(body).toBe('saved content');
				done();
			});
		});
	});
});
