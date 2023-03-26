<template lang="pug">
//Renderer(ref="renderer" resize orbit-ctrl)
Renderer(ref="renderer" alpha antialias resize)
  OrthographicCamera(
    :left="width * -1",
    :right="width",
    :top="height",
    :bottom="height * -1",
    :position="{ x:0, y:0, z: 1024 }")
  Scene
    AmbientLight(:color="'#20063B'")
    PointLight(:position="lightPos" :color="'#CC3363'")
    Cylinder(
      :position="{ x: 0, y: 0, z: 0 }"
      :rotation="{ x: Math.PI / 2, y: 0, z: 0 }"
      :scale="{ x: 1, y: 1, z: 1 }"
      :radiusTop="maxLength" :radiusBottom="maxLength / 2 * Math.PI " :height="1" :radialSegments="32" :heightSegments="16")
      LambertMaterial(:color="'#C2F9BB'")

    //Tube(v-for="t in tubes" :ref="t.key" v-bind="t")
      LambertMaterial(:color="'#C2F9BB'")
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useWindowSize } from '@vueuse/core'
import {Vector3} from 'three'

const renderer = ref<any>(null)

const {width, height} = useWindowSize()
const maxLength = height > width ? height : width
const radius = 2 * Math.PI * (maxLength.value / (2 * Math.PI))

interface Point {
  x: number;
  y: number;
}
function getRandomPoint(r: number): Point {
  // pick a random point in a circle of a set radius.
  const angle: number = Math.random() * Math.PI * 2;
  const x: number = Math.cos(angle) * r;
  const y: number = Math.sin(angle) * r;
  return { x, y };
}
console.log(getRandomPoint(maxLength.value/2))
const lightPos = ref(new Vector3(0,0,50))
interface Tube {
  key: string
  points: Vector3[]
  position: Vector3
}

const tubes = ref<Tube[]>(
    [0].map((i) => {
      return {
        key: `tube-${i}`,
        points: [
          new Vector3(0,3,10),
          new Vector3(0,0,-5),
        ],
        position: new Vector3(0,0,0)
      }
    })
)

onMounted(() => {
  const animate = () => {
    const delta = Math.sin(new Date().getTime() / 1000)
    tubes.value.map(tube => {
      tube.position = tube.position.multiplyScalar(delta)
      return tube
    })
    requestAnimationFrame(animate)
  }
  animate()
})
</script>