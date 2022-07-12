define([
    'uiComponent',
    'ko',
    'jquery',
    'underscore'
], function (Component, ko, $ , _) {
    return Component.extend({
        defaults: {
            template: "Ndk_CustomHeader/real-time-count",
            tracks: {
                isLoading: true
            }
        },
        _currentTime: ko.observable('Loading...'),
        getRealTime: function () {
            return this._currentTime;
        },
        initialize: function () {
            this.isLoading = true;
            this._super();
            setInterval(this._getRealTime.bind(this), 1000);
            this.isLoading = false;
            return this;
        },
        _getRealTime: function () {
            this._currentTime(new Date());
        }
    });
});
