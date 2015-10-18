(function() {
    var AppComponent = ng
        .Component({
            selector: 'app-container',
            templateUrl: 'container.html'
        })
        .Class({
            constructor: function() {
                this.title = "this is input";
                this.myControllerMethod = function() {
                    // console.log(this.sample.value);
                }
            }
        });

    var Router = ngRouter
        .RouteConfig([{
            path: '/',
            component: AppComponent
        }]);
    //console.log(ngRouter);

    document.addEventListener('DOMContentLoaded', function() {
        ng.bootstrap(AppComponent);
    });
})();