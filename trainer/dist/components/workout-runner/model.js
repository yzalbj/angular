System.register([], function (exports_1, context_1) {
    "use strict";
    var WorkoutPlan, ExercisePlan, Exercise;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            WorkoutPlan = /** @class */ (function () {
                function WorkoutPlan(name, title, restBetweenExercise, exercises, description) {
                    this.name = name;
                    this.title = title;
                    this.restBetweenExercise = restBetweenExercise;
                    this.exercises = exercises;
                    this.description = description;
                }
                WorkoutPlan.prototype.totalWorkoutDuration = function () {
                    if (!this.exercises)
                        return 0;
                    var total = this.exercises.map(function (e) { return e.duration; }).reduce(function (previous, current) { return previous + current; });
                    return (this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length - 1) + total;
                };
                return WorkoutPlan;
            }());
            exports_1("WorkoutPlan", WorkoutPlan);
            ExercisePlan = /** @class */ (function () {
                function ExercisePlan(exercise, duration) {
                    this.exercise = exercise;
                    this.duration = duration;
                }
                return ExercisePlan;
            }());
            exports_1("ExercisePlan", ExercisePlan);
            Exercise = /** @class */ (function () {
                function Exercise(name, title, description, image, nameSound, procedure, videos) {
                    this.name = name;
                    this.title = title;
                    this.description = description;
                    this.image = image;
                    this.nameSound = nameSound;
                    this.procedure = procedure;
                    this.videos = videos;
                }
                return Exercise;
            }());
            exports_1("Exercise", Exercise);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd29ya291dC1ydW5uZXIvbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUNFLHFCQUNTLElBQVksRUFDWixLQUFhLEVBQ2IsbUJBQTJCLEVBQzNCLFNBQXlCLEVBQ3pCLFdBQW9CO29CQUpwQixTQUFJLEdBQUosSUFBSSxDQUFRO29CQUNaLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQ2Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFRO29CQUMzQixjQUFTLEdBQVQsU0FBUyxDQUFnQjtvQkFDekIsZ0JBQVcsR0FBWCxXQUFXLENBQVM7Z0JBQzdCLENBQUM7Z0JBRUQsMENBQW9CLEdBQXBCO29CQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUzt3QkFBRSxPQUFPLENBQUMsQ0FBQztvQkFFOUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsUUFBUSxFQUFWLENBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQVEsRUFBRSxPQUFPLElBQUssT0FBQSxRQUFRLEdBQUcsT0FBTyxFQUFsQixDQUFrQixDQUFDLENBQUM7b0JBRXBHLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pHLENBQUM7Z0JBQ0gsa0JBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBOztZQUVEO2dCQUNFLHNCQUFtQixRQUFrQixFQUFTLFFBQWdCO29CQUEzQyxhQUFRLEdBQVIsUUFBUSxDQUFVO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7Z0JBQzlELENBQUM7Z0JBQ0gsbUJBQUM7WUFBRCxDQUhBLEFBR0MsSUFBQTs7WUFFRDtnQkFFRSxrQkFDUyxJQUFZLEVBQ1osS0FBYSxFQUNiLFdBQW1CLEVBQ25CLEtBQWEsRUFDYixTQUFrQixFQUNsQixTQUFrQixFQUNsQixNQUFzQjtvQkFOdEIsU0FBSSxHQUFKLElBQUksQ0FBUTtvQkFDWixVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUNiLGdCQUFXLEdBQVgsV0FBVyxDQUFRO29CQUNuQixVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUNiLGNBQVMsR0FBVCxTQUFTLENBQVM7b0JBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQVM7b0JBQ2xCLFdBQU0sR0FBTixNQUFNLENBQWdCO2dCQUFJLENBQUM7Z0JBQ3RDLGVBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTs7UUFDRCxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvd29ya291dC1ydW5uZXIvbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV29ya291dFBsYW4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nLFxuICAgIHB1YmxpYyByZXN0QmV0d2VlbkV4ZXJjaXNlOiBudW1iZXIsXG4gICAgcHVibGljIGV4ZXJjaXNlczogRXhlcmNpc2VQbGFuW10sXG4gICAgcHVibGljIGRlc2NyaXB0aW9uPzogc3RyaW5nKSB7XG4gIH1cblxuICB0b3RhbFdvcmtvdXREdXJhdGlvbigpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5leGVyY2lzZXMpIHJldHVybiAwO1xuXG4gICAgbGV0IHRvdGFsID0gdGhpcy5leGVyY2lzZXMubWFwKChlKSA9PiBlLmR1cmF0aW9uKS5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiBwcmV2aW91cyArIGN1cnJlbnQpO1xuXG4gICAgcmV0dXJuICh0aGlzLnJlc3RCZXR3ZWVuRXhlcmNpc2UgPyB0aGlzLnJlc3RCZXR3ZWVuRXhlcmNpc2UgOiAwKSAqICh0aGlzLmV4ZXJjaXNlcy5sZW5ndGggLSAxKSArIHRvdGFsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeGVyY2lzZVBsYW4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZXhlcmNpc2U6IEV4ZXJjaXNlLCBwdWJsaWMgZHVyYXRpb246IG51bWJlcikge1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeGVyY2lzZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyxcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICBwdWJsaWMgaW1hZ2U6IHN0cmluZyxcbiAgICBwdWJsaWMgbmFtZVNvdW5kPzogc3RyaW5nLFxuICAgIHB1YmxpYyBwcm9jZWR1cmU/OiBzdHJpbmcsXG4gICAgcHVibGljIHZpZGVvcz86IEFycmF5PHN0cmluZz4pIHsgfVxufVxuIl19
