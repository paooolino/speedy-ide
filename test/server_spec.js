import expect from 'expect';
import request from 'request';
import fs from 'fs';
import http from 'http';

describe('Servet test', () => {
	
	let server;
	
	before(() => {
		const path = __dirname + '/tmp/';
		fs.mkdirSync(path);
		fs.writeFileSync(path + 'file1.txt', 'file1');
		fs.writeFileSync(path + 'file2.txt', 'file2');
		fs.mkdirSync(path + 'dir');
		fs.writeFileSync(path + 'dir/file3.txt', 'file3');
	});
	
	after(() => {
		const path = __dirname + '/tmp';
		fs.unlinkSync(path + '/file1.txt');
		fs.unlinkSync(path + '/file2.txt');
		fs.unlinkSync(path + '/dir/file3.txt');
		fs.rmdirSync(path + '/dir');
		fs.rmdirSync(path);
	});
	
  beforeEach(() => {
    server = require('../server');
  });
	
  afterEach(() => {
    server.close();
  });
	
	/*
	it('sends CORS header', (done) => {
		http.get('http://localhost:8081/', (res) => {
			console.log(res.getHeader('Access-Control-Allow-Origin'));
			expect(res.getHeader('Access-Control-Allow-Origin')).toBe('*');
			done();
		});
	});
	*/
	
	it('returns a list of items', (done) => {
		http.get('http://localhost:8081/?action=openProject&path=/speedy-ide/test/tmp/', (res) => {
			res.on('data', (chunk) => {
				const json = JSON.parse(chunk);
				expect(json.length).toBe(3);
				expect(json.filter((entry) => {
					return entry.name == 'dir' && entry.isDirectory
				}).length).toBe(1);
				
				done();
			});
		});
	});
	
});
