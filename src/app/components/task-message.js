module.exports = Ember.Component.extend({

    messages: Ember.inject.service(),

    message: null,

    task: Ember.computed.alias('message.task'),

    progress: Ember.computed.alias('task.progress'),

    content: Ember.computed.alias('task.desc'),

    tagName: 'li',

    classNames: 'task-message',

    onFinish: function(){
        if (this.get('task.isDone')) {
            this.get('messages.queue').removeObject(this.get('message'));
        }
    }.observes('task.state').on('init')

});