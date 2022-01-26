//Test method
/([0-9]{2})/.test('super 08'); //true

/(^[0-9]{2})/.test('super 08'); //false

//Exec method will return an array with the first matched

const result = /[0-9]+/.exec('super 08 12'); //true
