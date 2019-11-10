import Controller from '@ember/controller';

export default Controller.extend({

    searchValue: '',

    filterSongs: Ember.computed.filter('songs', function(song){
        console.log('is execturing ?')
        console.log(song.artistName.search(this.get('searchValue')))

        return song;
       // return song.artistName.search(this.get('searchValue'));
    }),

    songSearch: Ember.observer('searchValue', function(){
        console.log(this.get('filterSongs'))
        console.log(this.get('model.songs'))
       this.get('filterSongs')
    }),

});
