/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sumMajorCredits: () => (/* binding */ sumMajorCredits),
/* harmony export */   sumMinorCredits: () => (/* binding */ sumMinorCredits)
/* harmony export */ });
// Function to sum MajorCredits
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "major",
    };
}
// Function to sum MinorCredits
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "minor",
    };
}
// Example usage:
var major1 = { credits: 30, brand: "major" };
var major2 = { credits: 40, brand: "major" };
var minor1 = { credits: 10, brand: "minor" };
var minor2 = { credits: 15, brand: "minor" };
var totalMajorCredits = sumMajorCredits(major1, major2);
var totalMinorCredits = sumMinorCredits(minor1, minor2);
console.log("Total Major Credits: ".concat(totalMajorCredits.credits));
console.log("Total Minor Credits: ".concat(totalMinorCredits.credits));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ01BLCtCQUErQjtBQUN4QixTQUFTLGVBQWUsQ0FBQyxRQUFzQixFQUFFLFFBQXNCO0lBQzVFLE9BQU87UUFDTCxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTztRQUM1QyxLQUFLLEVBQUUsT0FBTztLQUNmLENBQUM7QUFDSixDQUFDO0FBRUQsK0JBQStCO0FBQ3hCLFNBQVMsZUFBZSxDQUFDLFFBQXNCLEVBQUUsUUFBc0I7SUFDNUUsT0FBTztRQUNMLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPO1FBQzVDLEtBQUssRUFBRSxPQUFPO0tBQ2YsQ0FBQztBQUNKLENBQUM7QUFFRCxpQkFBaUI7QUFDakIsSUFBTSxNQUFNLEdBQWlCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDN0QsSUFBTSxNQUFNLEdBQWlCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFFN0QsSUFBTSxNQUFNLEdBQWlCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDN0QsSUFBTSxNQUFNLEdBQWlCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFFN0QsSUFBTSxpQkFBaUIsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzFELElBQU0saUJBQWlCLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUUxRCxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUF3QixpQkFBaUIsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDO0FBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQXdCLGlCQUFpQixDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrXzUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFza181L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrXzUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrXzUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrXzUvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gRGVmaW5lIE1ham9yQ3JlZGl0cyBpbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTWFqb3JDcmVkaXRzIHtcbiAgY3JlZGl0czogbnVtYmVyO1xuICBicmFuZDogXCJtYWpvclwiOyAvLyBCcmFuZCB0byB1bmlxdWVseSBpZGVudGlmeSBNYWpvckNyZWRpdHNcbn1cblxuLy8gRGVmaW5lIE1pbm9yQ3JlZGl0cyBpbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTWlub3JDcmVkaXRzIHtcbiAgY3JlZGl0czogbnVtYmVyO1xuICBicmFuZDogXCJtaW5vclwiOyAvLyBCcmFuZCB0byB1bmlxdWVseSBpZGVudGlmeSBNaW5vckNyZWRpdHNcbn1cblxuLy8gRnVuY3Rpb24gdG8gc3VtIE1ham9yQ3JlZGl0c1xuZXhwb3J0IGZ1bmN0aW9uIHN1bU1ham9yQ3JlZGl0cyhzdWJqZWN0MTogTWFqb3JDcmVkaXRzLCBzdWJqZWN0MjogTWFqb3JDcmVkaXRzKTogTWFqb3JDcmVkaXRzIHtcbiAgcmV0dXJuIHtcbiAgICBjcmVkaXRzOiBzdWJqZWN0MS5jcmVkaXRzICsgc3ViamVjdDIuY3JlZGl0cyxcbiAgICBicmFuZDogXCJtYWpvclwiLFxuICB9O1xufVxuXG4vLyBGdW5jdGlvbiB0byBzdW0gTWlub3JDcmVkaXRzXG5leHBvcnQgZnVuY3Rpb24gc3VtTWlub3JDcmVkaXRzKHN1YmplY3QxOiBNaW5vckNyZWRpdHMsIHN1YmplY3QyOiBNaW5vckNyZWRpdHMpOiBNaW5vckNyZWRpdHMge1xuICByZXR1cm4ge1xuICAgIGNyZWRpdHM6IHN1YmplY3QxLmNyZWRpdHMgKyBzdWJqZWN0Mi5jcmVkaXRzLFxuICAgIGJyYW5kOiBcIm1pbm9yXCIsXG4gIH07XG59XG5cbi8vIEV4YW1wbGUgdXNhZ2U6XG5jb25zdCBtYWpvcjE6IE1ham9yQ3JlZGl0cyA9IHsgY3JlZGl0czogMzAsIGJyYW5kOiBcIm1ham9yXCIgfTtcbmNvbnN0IG1ham9yMjogTWFqb3JDcmVkaXRzID0geyBjcmVkaXRzOiA0MCwgYnJhbmQ6IFwibWFqb3JcIiB9O1xuXG5jb25zdCBtaW5vcjE6IE1pbm9yQ3JlZGl0cyA9IHsgY3JlZGl0czogMTAsIGJyYW5kOiBcIm1pbm9yXCIgfTtcbmNvbnN0IG1pbm9yMjogTWlub3JDcmVkaXRzID0geyBjcmVkaXRzOiAxNSwgYnJhbmQ6IFwibWlub3JcIiB9O1xuXG5jb25zdCB0b3RhbE1ham9yQ3JlZGl0cyA9IHN1bU1ham9yQ3JlZGl0cyhtYWpvcjEsIG1ham9yMik7XG5jb25zdCB0b3RhbE1pbm9yQ3JlZGl0cyA9IHN1bU1pbm9yQ3JlZGl0cyhtaW5vcjEsIG1pbm9yMik7XG5cbmNvbnNvbGUubG9nKGBUb3RhbCBNYWpvciBDcmVkaXRzOiAke3RvdGFsTWFqb3JDcmVkaXRzLmNyZWRpdHN9YCk7XG5jb25zb2xlLmxvZyhgVG90YWwgTWlub3IgQ3JlZGl0czogJHt0b3RhbE1pbm9yQ3JlZGl0cy5jcmVkaXRzfWApO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=