<template>
    <div class="statistics">
        <h1 class="title">Statistics</h1>

        <div v-if="statistics" class="statistics-info">
            <div class="box">
                <p class="subtitle">Total Workouts: {{ statistics.totalWorkouts }}</p>
            </div>
            <div class="box">
                <p class="subtitle">Total Duration: {{ statistics.totalDuration }} minutes</p>
            </div>
            <div class="box">
                <p class="subtitle">Average Calories Burned: {{ statistics.avgCaloriesBurned }} calories</p>
            </div>
        </div>

        <div v-else class="loading">
            <p class="subtitle">Loading statistics...</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            statistics: null
        };
    },
    mounted() {
        this.fetchStatistics();
    },
    methods: {
        fetchStatistics() {
            // Simulating an API call to fetch workout statistics for a user
            setTimeout(() => {
                const response = {
                    totalWorkouts: 10,
                    totalDuration: 120,
                    avgCaloriesBurned: 300
                };
                this.statistics = response;
            }, 2000);
        }
    }
};
</script>

<style scoped>
.statistics {
    text-align: center;
}

.statistics-info {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.box {
    margin: 10px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
}

.loading {
    margin-top: 20px;
    font-style: italic;
}
</style>