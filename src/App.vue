<template>
  <div id="app">
    <div class="required-items-section">
      <h2>What items does Mrrl want?</h2>
      <div class="required-item" v-for="item in END_ITEMS" v-bind:key="item">
        <WowheadLink
          v-bind:url="ITEM_INFO[item].wowheadLink"
          v-bind:name="ITEM_INFO[item].name"
          v-bind:color="QUALITY_COLOR[ITEM_INFO[item].quality]"
        />
        <input v-model.number="requiredItems[item]" type="number" min="0" />
      </div>
    </div>
    <div class="result-section">
      <h2>Steps (Total Cost: {{ totalGoldCost }}g)</h2>
      <ul>
        <li
          class="buy-step"
          v-for="(buyStep, index) in buySteps"
          v-bind:key="index"
          style="text-align: left"
        >
          Goto
          <WowheadLink
            v-bind:url="MURLOC_INFO[ITEM_INFO[buyStep.item].murloc].wowheadLink"
            v-bind:name="ITEM_INFO[buyStep.item].murloc"
            v-bind:color="NPC_COLOR"
          />
          <ul>
            <li style="text-align: right">
              Buy {{ buyStep.amount}}
              <WowheadLink
                v-bind:url="ITEM_INFO[buyStep.item].wowheadLink"
                v-bind:name="ITEM_INFO[buyStep.item].name"
                v-bind:color="QUALITY_COLOR[ITEM_INFO[buyStep.item].quality]"
              />
            </li>
          </ul>
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapValues } from "lodash";
import { END_ITEMS, MURLOC_INFO, ITEM_INFO, ItemSet, BuyStep } from "./model";
import { solve } from "./solver";
import WowheadLink from "./WowheadLink.vue";

function createEmptyItemSet(): ItemSet {
  return mapValues(ITEM_INFO, _ => 0);
}

export default Vue.extend({
  name: "app",
  components: {
    WowheadLink
  },
  data: function() {
    return {
      MURLOC_INFO,
      ITEM_INFO,
      END_ITEMS,
      requiredItems: createEmptyItemSet(),
      NPC_COLOR: "#ffd100",
      QUALITY_COLOR: {
        Common: "#fff",
        Uncommon: "#1eff00",
        Rare: "#0070dd",
        Epic: "#a335ee"
      }
    };
  },
  computed: {
    solverResult: function(): [BuyStep[], number] {
      return solve(this.requiredItems);
    },
    buySteps: function(): BuyStep[] {
      return this.solverResult[0];
    },
    totalGoldCost: function(): number {
      return this.solverResult[1];
    }
  }
});
</script>

<style lang="scss">
body {
  background-color: rgb(29, 29, 29);
  color: white;
}

#app {
  font-family: "Open Sans", Arial, "Helvetica Neue", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 400px;
  margin: 0 auto;
}

h2 {
  text-align: center;
}

.required-items-section {
  display: flex;
  flex-direction: column;

  .required-item {
    display: flex;
    justify-content: space-between;
  }
}

.result-section {
  ul,
  li {
    list-style-type: none;
    padding: 0;
  }
}
</style>
