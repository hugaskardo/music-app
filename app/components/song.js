import Component from '@ember/component';
import _ from 'lodash';

export default Component.extend({
    //store: Ember.inject.service(),

    isDisabled: true,
    currentDate: null,

    actions: {
        toggleInput() {
            this.toggleProperty('isDisabled')
        },

        // editMusic(song, currentElemntData, dataKey){
        //     this.get('onEditMusic')(song,currentElemntData,dataKey)
        //     // this.store.findRecord('song', song.id).then( song =>{
                
        //     // })
        // },

        editMusic: _.debounce(function(song, currentElemntData, dataKey){
            this.get('onEditMusic')(song,currentElemntData,dataKey)
        }, 500),

        editSongYear(value){
           this.set('currentDate',value)
        },

        onClose(song, dataKey){
            this.send('editMusic', song, this.get('currentDate'), dataKey )
            this.set('currentDate', null)
        }
    }
});