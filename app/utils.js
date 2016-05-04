/* global flipchart */

/**
 * Rename a property
 */
module.exports.updateProp = function (self, prop) {
    return (newProp) => {
        self.source[newProp] = self.source[prop];
        delete self.source[prop];
        self.values = flipchart.getValues(self.source);
        self.forceUpdate();
    }
};

/**
 * Update a value
 */
module.exports.updateVal = function (self, prop) {
    return (newVal) => {
        self.source[prop] = flipchart.resolveValue(newVal);
        self.values = flipchart.getValues(self.source);
        self.forceUpdate();
    }
};

module.exports.updateArray =  function(self, sourceItem, index) {
    return (newSourceItem) => {
        newSourceItem = flipchart.resolveValue(newSourceItem);

        if (newSourceItem === sourceItem) {
            return;
        }
        if (newSourceItem === '') {
            newSourceItem = undefined;
        }
        self.source.splice(index, 1, newSourceItem);
        self.forceUpdate();
    }
}