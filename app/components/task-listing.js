import Component from '@ember/component';

export default Component.extend({
    isVisible: false,
    actions: {
        toggleVisible() {
            this.toggleProperty('isVisible');
        }
    }
});
