<template>
  <div class="wrapper">
    <div class="word">
      <div class="horizontal">
        <div v-if="info.word" class="syllable vertical">
          <h1>{{ info.word }}</h1>
          <div v-if="info.syllables" class="syl horizontal">
            <div v-for="syllable in info.syllables.list" :key="syllable.id">
              <div>{{ syllable }}</div>
            </div>
          </div>
          <p v-if="info.pronunciation">{{ info.pronunciation.all }}</p>
        </div>
      </div>
      <div v-for="result in info.results" :key="result.id">
        <div class="definition">
          <h2>Definition</h2>
          <p>{{ result.definition }} ({{ result.partOfSpeech }})</p>
        </div>
        <div class="horizontal">
          <div v-if="result.derivation" class="derivation vertical">
            <h2>Derivations</h2>
            <div v-for="deriv in result.derivation" :key="deriv.id">
              <p>{{ deriv }}</p>
            </div>
          </div>
          <div v-if="result.examples" class="examples vertical">
            <h2>Examples</h2>
            <div v-for="example in result.examples" :key="example.id">
              <p>{{ example }}</p>
            </div>
          </div>
          <div v-if="result.synonyms" class="synonyms vertical">
            <h2>Synonyms</h2>
            <div v-for="synonym in result.synonyms" :key="synonym.id">
              <p>{{ synonym }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WordInfo",
  props: {
    info: Object,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.word {
  width: 85%;
}

.horizontal {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 1%;
}

.syllable {
  background-color: #92a2f8;
  border-radius: 20px;
  color: white;
  align-items: center;
  justify-content: center;
}

.syl {
  width: 10%;
}

.definition {
  background-color: #8a80d9;
  border-radius: 20px;
  color: white;
}

.derivation {
  background-color: #bb9af0;
  border-radius: 20px;
  color: white;
}

.examples {
  background-color: #ba80d9;
  border-radius: 20px;
  color: white;
}

.synonyms {
  background-color: #f192f8;
  border-radius: 20px;
  color: white;
}
</style>