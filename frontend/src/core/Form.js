import Errors from './Errors';

class Form {

    constructor(data) {
        this.originalData = data;

        Object.assign(this, data);

        this.errors = new Errors();
    }

    data() {
        let data = {};

        for(let property in this.originalData) {
            data[property] = this[property];
        }

        return data;
    }

    reset() {
        for(let field in this.originalData){
            this[field] = '';
        }

        this.errors.clear();
    }

    showErrors(errors) {
        this.errors.record(errors)
    }
}

export default Form;
