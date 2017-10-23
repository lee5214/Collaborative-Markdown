import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'bins.insert': function () { // '()=>' binds 'this' with current parent, don't use it if there's 'this' inside
    return Bins.insert({
      createdAt: new Date(), //mongo knows how to save new Date()
      content: '',
      sharedWith: {},
      ownerId: this.userId,
    });
  },
  'bins.remove': function (bin) {
    return Bins.remove(bin);
  },
  'bins.update': function (bin, content) {
    return Bins.update(bin._id, {$set: {content: content}});
  },
  'bins.share': function (bin, email) {
    if (Bins.findOne({_id: bin._id}).sharedWith.indexOf(email) < 0) {//first check if the email alread in the list
      return Bins.update(bin._id, {$push: {sharedWith: email}});
    }
  },
  'bins.removeSharedEmail': function(bin,email){
    return Bins.update(bin._id, {$pull: {sharedWith: email}})
  }
});

export const Bins = new Mongo.Collection('bins');