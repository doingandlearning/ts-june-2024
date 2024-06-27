/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (() => {

eval("{\n    // a method to fetch the data (nb works without async but ts likes async)\n    // here the generic type <T> means if we ask for User we get an array of User             | string can be left off\n    const fetchFromAPI = async (category = \"users\", id) => {\n        let param = \"\";\n        if (0 >= id && id < 10) {\n            param += id; // += overcomes the string-number data type problem\n        }\n        const api = `https://jsonplaceholder.typicode.com/${category}/${param}`;\n        try {\n            const response = await fetch(api); // defaults to 'get'\n            // const { data } = await response.json() // we know this API returns json\n            return response.json(); // ... as a promise i.e. an Array of items\n        }\n        catch (error) {\n            if (error) {\n                return error.message; // we know this PAI will return a message string\n            }\n        }\n        finally {\n            const images = document.getElementById(\"images\");\n            images.innerHTML = \"\";\n        }\n    };\n    // we need to filter the users to leave just username, email and website\n    // here we construct a set of HTML list items\n    const listOfUsers = (users) => {\n        // what type is listOfUsers\n        const names = users\n            .map((user) => `<li>${user.name} ${user.email} ${user.website}</li>`)\n            .join(\"\\n\");\n        return `<ul>${names}</ul>`;\n    };\n    // use the code to get all users\n    fetchFromAPI().then((d) => {\n        const output = document.getElementById(\"output\");\n        console.log(`promise returned ${d}`);\n        // make sure we have an array type\n        if (typeof d != \"string\") {\n            const names = d.map((user) => user.name).join(\"\\n\");\n            console.log(names);\n            // output.innerHTML = names;\n            output.innerHTML = listOfUsers(d); // this is pretty\n        }\n    });\n    // use the code to fetch photos\n    const images = document.getElementById(\"images\");\n    images.innerHTML = \"<p>Loading...</p>\";\n    fetch(\"photos\")\n        .then((response) => response.json())\n        .then((photos) => (images.innerHTML = getListOfPhotos(photos)));\n    const getListOfPhotos = (photos) => {\n        console.log(photos);\n        const titles = photos\n            .map((photo) => `<li>${photo[\"title\"]}</li>`)\n            .join(\"\\n\");\n        return `<ul>${titles}</ul>`;\n    };\n}\n\n\n//# sourceURL=webpack://02-init/./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"]();
/******/ 	
/******/ })()
;