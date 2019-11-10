import Component from '@ember/component';

export default Component.extend({
    //store: Ember.inject.service(),

    isDisabled: true,

    searchValue: '',

    filterSongs: Ember.computed.filter('songs', function(song){
        //  if(this.get('searchValue') === ''){
        //     return song
        //  } else {
        //      if(song.artistName.search(this.get('searchValue')) != -1 ){
        //          return song
        //      } 
        //  }
        return this.get('searchValue') === '' ? song : ( song.artistName.search(this.get('searchValue')) != -1 && song )
    }),

    songSearch: Ember.observer('searchValue', function(){
       this.notifyPropertyChange('filterSongs')
    }),

    actions: {
        toggleInput() {
            this.toggleProperty('isDisabled')
        },

        editMusic(song, currentElemntData, dataKey){

            this.get('onEditMusic')(song,currentElemntData,dataKey)
            // this.store.findRecord('song', song.id).then( song =>{
                
            // })
        }
    }
});