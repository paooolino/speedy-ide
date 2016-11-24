/*
	external imports
*/

import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

/*
	internal imports
*/


/*
	stateless component
*/

function onChange(newValue) {
  console.log('change',newValue);
}

const HomePage = (props) => (
<div>
  <h1>HomePage</h1>
  <AceEditor
    mode="java"
    theme="github"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{$blockScrolling: true}}
  />,
</div>

);

/*
	PropTypes
	
	These are the required properties for the stateless component
	defined above. Accepted values are:
	- string
	- func
	- bool
	...
*/

HomePage.propTypes = {

}

export default HomePage;
