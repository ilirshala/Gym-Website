import React from 'react';
import '../css/Trainings.css';
import training from '../img/training.png'
import DescriptionItems from './DescriptionItems';
import weight from '../img/weight.png'
import general from '../img/general.png'
import functional from '../img/functional.png'

function Trainings() {
    return (
        <div className="row">
            <div className="col-2 col1">
                <img className="trainingImg" src={training} alt="" />
            </div>
            <div className="col-2 col2">
                <DescriptionItems
                    image={weight}
                    title="Weight Training"
                    paragraph="From bodybuilding to powerlifting and everything in between, the Fitness Factory has the equipment to help you reach your goals. With dumbells up to 150lbs, 7 squat racks, 5 deadlift platforms, 2 competition benches, and a variety of plate loaded and pin loaded machines, we have everything you need."
                />
                <DescriptionItems
                    image={general}
                    title="General Fitness"
                    paragraph="If your goals are to improve your overall health and wellness, we have everything you need.  We have cardio equipment spanning two floors including 8 stepmills, 15+ treadmills, row machines, exercise bikes, spin bikes, ellipticals, arc trainers and even a Jacob’s Ladder. In addition to cardio equipment, we have stretching areas with mats, foam rollers, bands, light weights, and much more."
                />
                <DescriptionItems
                    image={functional}
                    title="Functional Training"
                    paragraph="With 60 feet of turf with a sled, stackable plyometric boxes, weighted medicine balls, battle ropes, squat racks, and deadlift platforms our functional training room has all the equipment you need to take your training to the next level."
                />
                <div className="link">
                    <p>Learn more about our facility!</p>
                </div>
            </div>
        </div>
    )
}

export default Trainings
