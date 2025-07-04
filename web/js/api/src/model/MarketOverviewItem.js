/**
 * YAUSMA MarketOverviewItem Model - Browser Compatible
 * Converted from ES6 class to browser-compatible JavaScript
 * 
 * The version of the OpenAPI document: 0.1.0
 * 
 * NOTE: This was auto generated by OpenAPI Generator and converted for browser compatibility.
 * https://openapi-generator.tech
 */

/**
 * Constructs a new MarketOverviewItem.
 * @param {String} name Company name
 * @param {String} _short Short name/symbol
 * @param {String} sector Company sector
 * @param {String} currentPrice Current stock price
 * @param {Number} change Price change
 * @param {Number} high Day's high price
 * @param {Number} low Day's low price
 * @param {String} symbol Stock symbol
 * @param {Number} volume Trading volume
 */
function MarketOverviewItem(name, _short, sector, currentPrice, change, high, low, symbol, volume) {
    MarketOverviewItem.initialize(this, name, _short, sector, currentPrice, change, high, low, symbol, volume);
}

/**
 * Initializes the fields of this object.
 * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
 * Only for internal use.
 */
MarketOverviewItem.initialize = function(obj, name, _short, sector, currentPrice, change, high, low, symbol, volume) {
    obj['name'] = name;
    obj['short'] = _short;
    obj['sector'] = sector;
    obj['current_price'] = currentPrice;
    obj['change'] = change;
    obj['high'] = high;
    obj['low'] = low;
    obj['symbol'] = symbol;
    obj['volume'] = volume;
};

/**
 * Constructs a MarketOverviewItem from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from data to obj if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {MarketOverviewItem} obj Optional instance to populate.
 * @return {MarketOverviewItem} The populated MarketOverviewItem instance.
 */
MarketOverviewItem.constructFromObject = function(data, obj) {
    if (data) {
        obj = obj || new MarketOverviewItem();

        if (data.hasOwnProperty('name')) {
            obj['name'] = (typeof ApiClient !== 'undefined') ? ApiClient.convertToType(data['name'], 'String') : data['name'];
        }
        if (data.hasOwnProperty('short')) {
            obj['short'] = (typeof ApiClient !== 'undefined') ? ApiClient.convertToType(data['short'], 'String') : data['short'];
        }
        if (data.hasOwnProperty('sector')) {
            obj['sector'] = (typeof ApiClient !== 'undefined') ? ApiClient.convertToType(data['sector'], 'String') : data['sector'];
        }
        if (data.hasOwnProperty('current_price')) {
            obj['current_price'] = (typeof ApiClient !== 'undefined') ? ApiClient.convertToType(data['current_price'], 'String') : data['current_price'];
        }
        if (data.hasOwnProperty('change')) {
            obj['change'] = (typeof ApiClient !== 'undefined') ? ApiClient.convertToType(data['change'], 'Number') : data['change'];
        }
        if (data.hasOwnProperty('high')) {
            obj['high'] = (typeof ApiClient !== 'undefined') ? ApiClient.convertToType(data['high'], 'Number') : data['high'];
        }
        if (data.hasOwnProperty('low')) {
            obj['low'] = (typeof ApiClient !== 'undefined') ? ApiClient.convertToType(data['low'], 'Number') : data['low'];
        }
        if (data.hasOwnProperty('symbol')) {
            obj['symbol'] = (typeof ApiClient !== 'undefined') ? ApiClient.convertToType(data['symbol'], 'String') : data['symbol'];
        }
        if (data.hasOwnProperty('volume')) {
            obj['volume'] = (typeof ApiClient !== 'undefined') ? ApiClient.convertToType(data['volume'], 'Number') : data['volume'];
        }
        if (data.hasOwnProperty('news_article')) {
            obj['news_article'] = (typeof ApiClient !== 'undefined' && typeof NewsItem !== 'undefined') ? 
                ApiClient.convertToType(data['news_article'], NewsItem) : data['news_article'];
        }
    }
    return obj;
};

/**
 * Validates the JSON data with respect to MarketOverviewItem.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @return {boolean} to indicate whether the JSON data is valid with respect to MarketOverviewItem.
 */
MarketOverviewItem.validateJSON = function(data) {
    // check to make sure all required properties are present in the JSON string
    for (var i = 0; i < MarketOverviewItem.RequiredProperties.length; i++) {
        var property = MarketOverviewItem.RequiredProperties[i];
        if (!data.hasOwnProperty(property)) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
        }
    }
    
    // ensure the json data is a string
    if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
    }
    // ensure the json data is a string
    if (data['short'] && !(typeof data['short'] === 'string' || data['short'] instanceof String)) {
        throw new Error("Expected the field `short` to be a primitive type in the JSON string but got " + data['short']);
    }
    // ensure the json data is a string
    if (data['sector'] && !(typeof data['sector'] === 'string' || data['sector'] instanceof String)) {
        throw new Error("Expected the field `sector` to be a primitive type in the JSON string but got " + data['sector']);
    }
    // ensure the json data is a string
    if (data['current_price'] && !(typeof data['current_price'] === 'string' || data['current_price'] instanceof String)) {
        throw new Error("Expected the field `current_price` to be a primitive type in the JSON string but got " + data['current_price']);
    }
    // ensure the json data is a string
    if (data['symbol'] && !(typeof data['symbol'] === 'string' || data['symbol'] instanceof String)) {
        throw new Error("Expected the field `symbol` to be a primitive type in the JSON string but got " + data['symbol']);
    }
    // validate the optional field `news_article`
    if (data['news_article'] && typeof NewsItem !== 'undefined') {
        NewsItem.validateJSON(data['news_article']);
    }

    return true;
};

// Define required properties
MarketOverviewItem.RequiredProperties = ["name", "short", "sector", "current_price", "change", "high", "low", "symbol", "volume"];

/**
 * @member {String} name
 */
MarketOverviewItem.prototype['name'] = undefined;

/**
 * @member {String} short
 */
MarketOverviewItem.prototype['short'] = undefined;

/**
 * @member {String} sector
 */
MarketOverviewItem.prototype['sector'] = undefined;

/**
 * @member {String} current_price
 */
MarketOverviewItem.prototype['current_price'] = undefined;

/**
 * @member {Number} change
 */
MarketOverviewItem.prototype['change'] = undefined;

/**
 * @member {Number} high
 */
MarketOverviewItem.prototype['high'] = undefined;

/**
 * @member {Number} low
 */
MarketOverviewItem.prototype['low'] = undefined;

/**
 * @member {String} symbol
 */
MarketOverviewItem.prototype['symbol'] = undefined;

/**
 * @member {Number} volume
 */
MarketOverviewItem.prototype['volume'] = undefined;

/**
 * @member {module:model/NewsItem} news_article
 */
MarketOverviewItem.prototype['news_article'] = undefined;






// Make available globally
if (typeof window !== 'undefined') {
    window.MarketOverviewItem = MarketOverviewItem;
}

