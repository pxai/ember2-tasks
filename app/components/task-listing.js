import Component from '@ember/component';

export default Component.extend({
    isVisible: true,
    actions: {
        toggleVisible() {
            this.toggleProperty('isVisible');
        }
    }
});
