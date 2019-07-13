<template>
  <div id="app">
    <div class="required-items-section">
      <div style="display: flex; flex-direction: row; justify-content: center; align-items: center">
        <h2>What items does Mrrl want?</h2>
        <a href="https://github.com/SSchnaible/mrrl" style="padding-left: 8px">
          <img src="GitHub-Mark-Light-32px.png" />
        </a>
      </div>
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
          v-for="murlocVisit in murlocVisits"
          v-bind:key="json(murlocVisit)"
          style="text-align: left"
        >
          Go to
          <WowheadLink
            v-bind:url="MURLOC_INFO[murlocVisit.murloc].wowheadLink"
            v-bind:name="murlocVisit.murloc"
            v-bind:color="NPC_COLOR"
          />
          <ul>
            <li
              v-for="buyStep in murlocVisit.buys"
              v-bind:key="json(buyStep)"
              style="text-align: right"
            >
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
import {
  END_ITEMS,
  MURLOC_INFO,
  ITEM_INFO,
  ItemSet,
  BuyStep,
  MurlocVisit
} from "./model";
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
    solverResult: function(): [MurlocVisit[], number] {
      return solve(this.requiredItems);
    },
    murlocVisits: function(): MurlocVisit[] {
      return this.solverResult[0];
    },
    totalGoldCost: function(): number {
      return this.solverResult[1];
    }
  },
  methods: {
    json(obj: any): string {
      return JSON.stringify(obj);
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
