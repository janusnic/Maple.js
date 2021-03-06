import utility from './Utility.js';

/**
 * @method queryAll
 * @param {String} expression
 * @return {Array}
 */
let queryAll = function queryAll(expression) {
    "use strict";
    return utility.toArray(this.querySelectorAll(expression));
};

export default (function main() {

    "use strict";

    return {

        /**
         * @method getExternalStyles
         * @param {HTMLElement|HTMLDocument} element
         * @return {Array}
         */
        getExternalStyles(element) {
            return queryAll.call(element, 'link[type="text/css"]');
        },

        /**
         * @method getInlineStyles
         * @param {HTMLElement|HTMLDocument} element
         * @return {Array}
         */
        getInlineStyles(element) {
            return queryAll.call(element, 'style[type="text/css"]');
        },

        /**
         * @mmethod getLinks
         * @param {HTMLElement|HTMLDocument} element
         * @return {Array}
         */
        getLinks(element) {
            return queryAll.call(element, 'link[rel="import"]:not([data-ignore])');
        },

        /**
         * @mmethod getTemplates
         * @param {HTMLElement|HTMLDocument} element
         * @return {Array}
         */
        getTemplates(element) {
            return queryAll.call(element, 'template[ref]');
        },

        /**
         * @mmethod getScripts
         * @param {HTMLElement|HTMLDocument} element
         * @return {Array}
         */
        getScripts(element) {
            return queryAll.call(element, 'script[type="text/javascript"]');
        },

        /**
         * @method getAllScripts
         * @param {HTMLElement|HTMLDocument} element
         * @return {Array}
         */
        getAllScripts(element) {
            let jsxFiles = queryAll.call(element, 'script[type="text/jsx"]');
            return [].concat(utility.toArray(this.getScripts(element)), utility.toArray(jsxFiles));
        }

    };

})();