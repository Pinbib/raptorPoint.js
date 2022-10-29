
let raptor = {
  //function test
  'test':function() {
    console.log('Good');
    console.log('Everything works great!')
    console.log('(-_-)');
    console.log(':)');
    console.log('(:');
  },
  //function number 1
  'random': function(maxSum) {
    let rs = Math.ceil(Math.random()*maxSum);
    return rs;
  },
  //function number 2
  'getId': function(id) {
    return id;
  },
  //function number 3
  'getHTML': function(id) {
    let htmlCode = document.getElementById(id);
    return htmlCode;
  },
  //function numder 4
  'getTag': function(id, tag) {
    let code = document.getElementById(id);
    let Tag = code.querySelector(tag);
    return Tag;
  },
  //function number 5
  'getTags': function(id, tag) {
    let allTag = document.getElementById(id);
    let Tag = allTag.querySelectorAll(tag);
    return Tag;
  },
  //function number 6
  'searchTags': function(id, tag) {
    let allTag = document.getElementById(id);
    let Tag = allTag.querySelectorAll(tag);
    let lengthTags = Tag.length;
    let i = 0;
    while (lengthTags > i) {
      console.log(Tag[i]);
      i++;
    }
  },
  //function number 7
  'viewing': function(name){
    let r = name.length;
    let i = 0;
    while(i < r){
      console.log('index=', i, ';');
      console.log(name[i]);
      i++;
    }
  },
  //function number 8
  'getClass': function(className){
    let class_name = ('.' + className);
    let allTag = document.body;
    let tag = allTag.querySelectorAll(class_name);
    return tag;
  },
  //function number 9
  'searchClass':  function(className){
    let class_name = ('.' + className);
    let allTag = document.body;
    let tag = allTag.querySelectorAll(class_name);
    let taglen = tag.length;
    let i = 0;
    while(i<taglen){
      console.log(tag[i]);
      i++;
    }
  },
  //function number 10
  'editSrc': function(id, path_to_file) {
    let tag = getHTML(id);
    tag.src = path_to_file;
  },
  //function number 11
  'editId': function(id, newId){
    let tag = document.getElementById(id);
    tag.id = newId;
  },
  //function number 12
  'editClass': function(id, newClass){
    let tag = document.getElementById(id);
    tag.className = newClass;
  },
  //function number 13
  'editDiv': function(id, newId, newClas, value){
    let div = document.getElementById(id);
    let divTxt = div.tagName;
    if(divTxt == 'DIV'){
      if(newId!=''||newId!=null){
        div.id = newId;
      }
      if(newClas!=''||newClas!=null){
        div.className = newClas;
      } 
      if(value!=''||value!=null){
        div.innerHTML = value;
      }
    } else {
      console.warn('Attention:');
      console.error('Error');
      console.group('Error:');
      console.error('The error was not defined, try filling the function again');
      console.groupEnd();
    }
  },
  //function number 14
  'editTXT': function(id, newText) {
    let tag = document.getElementById(id);
    tag.innerText = newText;
  },
  //function number 15
  'serverJS':{
    'linkServer': function(url){
      var xhr = new XMLHttpRequest()
      xhr.open(
        'GET',
        url,
        true
      )
      xhr.send()
      
      xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) {
          return
        }
      
        if (xhr.status === 200) {
          return (xhr.responseText)
        } else {
          return ('error', xhr.responseText)
        }
      }
    },
    'sendJSON': function(url, valueJSON){
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log = this.responseText;
        }
      };
      var data = JSON.stringify(valueJSON);
      xhr.send(data);
    }
  },
  
}

module.exports = raptor;
npm exited with status 254