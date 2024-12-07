/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

const counters = document.querySelectorAll(".counter");

const animationSpeed = 500;

const updateCounter = (counter) => {

    const targetCount = +counter.getAttribute("data-target");

    let currentCount = +counter.innerText;

    const animationStep = targetCount / animationSpeed;

    if (currentCount < targetCount){
        counter.innerText = currentCount + animationStep;

        setTimeout(()=>{
            updateCounter(counter);
        },1);
    }else{
        counter.innerText = targetCount;
    }
}

counters.forEach((counter)=>{
    updateCounter(counter);
});