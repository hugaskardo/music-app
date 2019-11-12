import Route from '@ember/routing/route';
import RSVP from 'rsvp';



export default Route.extend({

    model(){
        return  RSVP.hash ({
            songs: this.store.findAll('song')
        });
    },

    actions:{

        editMusic(info,currentSong, newData ,dataKey){
            this.store.findRecord('song', currentSong.id).then(song => {
                song.set(dataKey, newData)
                song.save()
            })
        }

    }
});