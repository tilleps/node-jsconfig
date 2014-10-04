node-jsconfig
=============

Basic JSON config value getter/setter



## Installation

```
npm install -g tilleps-jsconfig
```

## Uninstall

```
npm uninstall -g tilleps-jsconfig
```


## Usage

#### Available arguments:

```
jsconfig [srcFile] [key] [value] [destFile]
```


#### Display help:
```
$ jsconfig
```
or:
```
$ jsconfig --help
```


#### Display contents of JSON file:

```
$ jsconfig example.json
```
or:
```
$ cat example.json
```

Output:
```javascript
{
  "name": {
    "first": "Bruce",
    "last": "Wayne",
    "full": "Bruce Wayne"
  },
  "address": {
    "home": {
      "street": "1007 Mountain Drive",
      "city": "Gotham"
    }
  },
  "emails": [
    "batman@gmail.com",
    "batman@yahoo.com"
  ]
}
```

#### Display contents of certain key in JSON file:

```
$ jsconfig example.json name.first
Bruce
```




#### Set/modify value of a particular key:
```
jsconfig example.json address.home.city "Gotham City"
jsconfig example.json emails[0] not-batman@gmail.com
jsconfig example.json emails[1] not-batman@yahoo.com
jsconfig example.json emails[] not-batman@aol.com
```

File **example.json** becomes:
```javascript
{
  "name": {
    "first": "Bruce",
    "last": "Wayne",
    "full": "Bruce Wayne"
  },
  "address": {
    "home": {
      "street": "1007 Mountain Drive",
      "city": "Gotham City"
    }
  },
  "emails": [
    "not-batman@gmail.com",
    "not-batman@yahoo.com",
    "not-batman@aol.com"
  ]
}
```


#### Set value of particular key and save in different file:
```
jsconfig example.json address.home.street unknown redacted.json
```




## Help

```
Options:

  -h, --help     output usage information
  -V, --version  output the version number

Examples:

  jsconfig package.json version                    get the version from package.json
  jsconfig package.json version 0.1.0              set version
  jsconfig package.json keywords                   get keywords
  jsconfig package.json keywords[] foo             add new keyword "foo"
  jsconfig package.json keywords[0] foo            modify first keyword to "foo"
  jsconfig package.json description foo bar.json   modify description to foo and save into file bar.json
```


## License 

(The ISC License)

Copyright (c) 2014 Eugene Song &lt;tilleps@gmail.com&gt;

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

