angular.module('tgMiniApp').component('history', {
    templateUrl: 'components/history/history.html',
    controller: function HistoryController() {
      this.items = [
        {
            prompt: "test"
        },
        {
            prompt: "test"
        },
        {
            prompt: "test"
        },
    ]
    },
    bindings:{
      content: '='
    }
  });