import { Factory } from 'ember-cli-mirage';
import  faker  from 'faker';

export default Factory.extend({

    artistName: faker.name.firstName,
    albumName: faker.internet.userName,
    albumDescription: faker.lorem.words(8),
    geners: faker.random.words(3),
    albumCover: faker.image.nature(150, 150),
    yearOfRelease: faker.date.past


});