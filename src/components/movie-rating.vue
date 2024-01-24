<template>
    <div class="radial-progress-container">
      <div class="radial-progress-inner">
        <span class="percentage-text">{{ progressValue }}</span>
      </div>
      <svg class="radial-progress-bar" width="40px" height="40px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle r="15" cx="20px" cy="20px" fill="transparent" :stroke="outerStrokeColor" stroke-width="4px"></circle>
        <circle :transform="'rotate(270, 20, 20)'" :r="15" cx="20px" cy="20px" fill="transparent" :stroke="innerStrokeColor" :stroke-width="'4px'" :stroke-dasharray="circumference" :stroke-dashoffset="strokeDashoffset"></circle>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      progressValue: {
        required: true,
        default: 0
      }
    },
    data() {
      return {
        strokeDashoffset: 0
      };
    },
    computed: {
      circumference() {
        return Math.PI * 30;
      },
      innerStrokeOffset() {
        return this.circumference * (1 - this.progressValue / 100);
      },
      outerStrokeColor() {
        if (this.progressValue > 70) {
          return '#204529';
        } else if (this.progressValue <= 30) {
          return '#571435';
        } else {
          return '#423D0F';
        }
      },
      innerStrokeColor() {
        if (this.progressValue >= 70) {
          return '#20D07A';
        } else if (this.progressValue <= 30) {
          return '#DB2361';
        } else {
          return '#D3D531';
        }
      }
    },
    watch: {
      progressValue() {
        this.strokeDashoffset = this.innerStrokeOffset;
      }
    },
    created() {
      this.strokeDashoffset = this.innerStrokeOffset;
    }
  };
  </script>
  
  <style>
  .radial-progress-container {
    position: relative;
  }
  
  .radial-progress-inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .radial-progress-bar {
    width: 40px;
    height: 40px;
    background-color: #071C21;
    border-radius: 50%;
  }
  
  .percentage-text {
    font-size: 10px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 4px;
  }
  </style>
  