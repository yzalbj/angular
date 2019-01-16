System.register(["@angular/core", "@angular/platform-browser", "./app.component", "../workout-runner/workout-runner.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, platform_browser_1, app_component_1, workout_runner_component_1, AppModule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (workout_runner_component_1_1) {
                workout_runner_component_1 = workout_runner_component_1_1;
            }
        ],
        execute: function () {
            AppModule = /** @class */ (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule],
                        declarations: [app_component_1.TrainerAppComponent, workout_runner_component_1.WorkoutRunnerComponent],
                        bootstrap: [app_component_1.TrainerAppComponent]
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVlBO2dCQUF5QixDQUFDO2dCQUFiLFNBQVM7b0JBTnJCLGVBQVEsQ0FBQzt3QkFDVCxPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxDQUFDO3dCQUN4QixZQUFZLEVBQUUsQ0FBQyxtQ0FBbUIsRUFBRSxpREFBc0IsQ0FBQzt3QkFDM0QsU0FBUyxFQUFFLENBQUMsbUNBQW1CLENBQUM7cUJBQ2hDLENBQUM7bUJBRVcsU0FBUyxDQUFJO2dCQUFELGdCQUFDO2FBQTFCLEFBQTBCOztRQUMxQixDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBUcmFpbmVyQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IFdvcmtvdXRSdW5uZXJDb21wb25lbnQgfSBmcm9tICcuLi93b3Jrb3V0LXJ1bm5lci93b3Jrb3V0LXJ1bm5lci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZV0sXG5cdGRlY2xhcmF0aW9uczogW1RyYWluZXJBcHBDb21wb25lbnQsIFdvcmtvdXRSdW5uZXJDb21wb25lbnRdLFxuXHRib290c3RyYXA6IFtUcmFpbmVyQXBwQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
