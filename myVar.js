// 01
// module.exports.a = 'hello a'; 
function myvar() {
    this.name = 'My instance';
    this.hello = 'My instance hello';
}

module.exports = myvar;
