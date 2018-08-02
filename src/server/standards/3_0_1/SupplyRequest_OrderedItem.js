const BackboneElement = require('./BackboneElement');
const Quantity = require('./Quantity');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class SupplyRequest_OrderedItem extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'SupplyRequest_OrderedItem';
	}

	// The amount that is being ordered of the indicated item.
	get quantity () {
		return this._quantity;
	}

	set quantity ( new_value ) {
		this._quantity = new Quantity(new_value);
	}

	// The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
	get itemCodeableConcept () {
		return this._itemCodeableConcept;
	}

	set itemCodeableConcept ( new_value ) {
		this._itemCodeableConcept = new CodeableConcept(new_value);
	}

	// The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
	get itemReference () {
		return this._itemReference;
	}

	set itemReference ( new_value ) {
		this._itemReference = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			quantity: this._quantity && this._quantity.toJSON(),
			itemCodeableConcept: this._itemCodeableConcept && this._itemCodeableConcept.toJSON(),
			itemReference: this._itemReference && this._itemReference.toJSON()
		});
	}

}

module.exports = SupplyRequest_OrderedItem;