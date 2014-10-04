"use strict";


var json = {
    
    /**
     * Set JSON value by key
     *
     * @param object obj JSON object, passed by reference
     * @param string path
     * @return this
     */
    set: function (obj, path, value) {
      var part;
      var parts = path.replace(/\[(.*?)\]/g, ".$1").split(".");      
      var last = parts.pop();
      
      var isArray = false;
      if (last == '') {
        isArray = true;       
      }
      else {
        parts.push(last);       
      }
      
      
      while(typeof (part = parts.shift()) != 'undefined') {
        
          if (parts.length == 0) {
            
            if (isArray) {
              if (toString.call(obj[part]) != '[object Array]') obj[part] = [];
              obj[part].push(value);
            }
            else {
              obj[part] = value; 
            }
            
          }
          else {
            if( typeof obj[part] != "object") obj[part] = {};          
          }
      
          // update "pointer"
          obj = obj[part];
      }
      
      return this;
    },
    
    
    /**
     * Get JSON value by key
     *
     * @param object obj JSON object
     * @param string path
     * @return object
     */
    get: function(obj, path) {
      var part;
      var parts = path.replace(/\[(.*?)\]/g, ".$1").split(".")
  
      var pattern = new RegExp(/home\[(.*)\]/);
  
      while (part = parts.shift()) {
    
        var match = part.match(/(.*)\[(.*)\]/);
    
        if (match !== null) {
          obj = obj[match[1]]      
          if (typeof obj == 'undefined') return obj;      
          obj = obj[match[2]];      
        }
        else {      
          if (typeof obj[part] == 'undefined') return obj[part];    
          obj = obj[part];
        }
    
      }
      
      return obj;
    }
};


module.exports = json;


