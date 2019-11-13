import Controller from '@ember/controller';
import { filter } from '@ember/object/computed';

export default Controller.extend({

    searchValue: '',

    filterSongs: filter('model.songs', function(song){
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

});
