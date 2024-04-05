const obj = {
    Html: 'hypertext markup language',
    css: 'cascading style sheet',
    rr: 'ruby and rails'
  };
  
  console.log(obj.Html);
  for(let key in obj)
    {
      // console.log(key, ':' , obj[key])
    }
  
  const arr  = ['js', 'ruby', 'pathon', 'c++'];
  for(let key in arr)
    {
      // console.log(key, arr[key])
    }
  
  const map = new Map();
  map.set('js', "javascript");
  map.set('html', "hyper text mrkup language");
  map.set('css', "case cadding stylesheet");
  
  for (let key in map)
    {
      // console.log(key)
    }

    // for in means key 