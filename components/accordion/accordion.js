angular.module('tgMiniApp').component('accordion', {
    templateUrl: 'components/accordion/accordion.html',
    controller: function AccordionController() {
      this.changeAccordion = function(){
        this.content.open = !this.content.open;
      }
    },
    bindings:{
      content: '='
    }
  });