import DS from 'ember-data';
const { Model, attr } = DS;
export default Model.extend({

    artistName: attr('string'),
    albumName: attr('string'),
    geners: attr('string'),
    albumCover: attr('string'),
    yearOfRelease: attr('date')

});