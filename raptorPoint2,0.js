var raptor = {
  'random': function(maxSum) {
    let rs = Math.ceil(Math.random()*maxSum);
    return rs;
  },
  'getId': function(id) {
    return document.getElementById(id);
  },
  'getHTML': function(id) {
    let htmlCode = document.getElementById(id);
    return htmlCode;
  },
  'getTag': function(id, tag) {
    let code = document.getElementById(id);
    let Tag = code.querySelector(tag);
    return Tag;
  },
  'getTags': function(id, tag) {
    let allTag = document.getElementById(id);
    let Tag = allTag.querySelectorAll(tag);
    return Tag;
  },
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
  'viewing': function(name){
    let r = name.length;
    let i = 0;
    while(i < r){
      console.log('index=', i, ';');
      console.log(name[i]);
      i++;
    }
  },
  'getClass': function(className){
    let class_name = ('.' + className);
    let allTag = document.body;
    let tag = allTag.querySelectorAll(class_name);
    return tag;
  },
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
  'editSrc': function(id, path_to_file) {
    let tag = getHTML(id);
    tag.src = path_to_file;
  },
  'editId': function(id, newId){
    let tag = document.getElementById(id);
    tag.id = newId;
  },
  'editClass': function(id, newClass){
    let tag = document.getElementById(id);
    tag.className = newClass;
  },
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
  'editTXT': function(id, newText) {
    let tag = document.getElementById(id);
    tag.innerText = newText;
  },
  'createBoard': ()=>{ 
    document.body.append(document.createElement('div').name = 'board');
    return document.body.getElementsByName('board');
  },
  'edit': (ElementId, value)=>{
    if(document.getElementById(ElementId).innerHTML){
      document.getElementById(ElementId).innerHTML = value;
    } else if(document.getElementById(ElementId).innerText){
      document.getElementById(ElementId).innerText = value;
    } else if(document.getElementById(ElementId).value){
      document.getElementById(ElementId).value = value;
    } else return 'Error 404';
  },
  'createDiv': (id, clas, name)=>{ 
    var div = document.createElement('div');
    div.id = id;
    div.className = clas;
    div.name = name;
    document.getElementsByName('board').append(div)
    return document.body.getElementsByName('board');
  },
  'create': (tag)=>{
    var tag = document.createElement(tag);
    document.getElementsByName('board').append(tag);
    return document.getElementsByName('board');
  },
  'EditBoard': (ElementId, value, id, name, clas, src, target, href)=>{
    if(ElementId==''&&' '){
      return 'ERROR 404';
    } else {
      var elem = document.getElementsByName('board').getElementById(ElementId);
      if(value!=''&&' '){
        if(elem.innerHTML){
          elem.innerHTML = value;
        } else if(elem.innerText){
          elem.innerText = value;
        } else if(elem.value){
          elem.value = value;
        } else return 'Error 404';
      }
      if(id!=''&&' '){
        elem.id = id;
      }
      if(name!=''&&' '){
        elem.name = name;
      }
      if(clas!=''&&' '){
        elem.className = clas;
      }
      if(elem.src){
        if(src!=''&&' '){
          elem.src = src;
        }
      }
      if(elem.target){
        if(target!=''&&' '){
          elem.target = target;
        }
      }
      if(elem.href){
        if(href!=''&&' '){
          elem.href = href;
        }
      }
      return document.getElementsByName('board');
    }
  }
}
module.export = raptor;
