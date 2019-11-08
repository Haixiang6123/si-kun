<template>
    <div id="app" class="center">
        <main>
            <div class="calendar-wrapper">
                <wired-calendar></wired-calendar>
            </div>

            <div class="form-wrapper center">
                <wired-card elevation="2" class="form center">
                    <div class="file-wrapper form-item center">
                        <wired-button>选一个CSV文件吧~</wired-button>
                        <span class="hidden-file-wrapper">
                        <input ref="fileInput" name="csvFile" type="file" @change="chooseFile">
                    </span>
                    </div>

                    <div class="form-item center">
                        <wired-input ref="internalReference" placeholder="Internal Reference" type="text"></wired-input>
                    </div>
                    <div class="form-item center">
                        <wired-input ref="controlSampleName" placeholder="Control Sample" type="text"></wired-input>
                    </div>

                    <div class="form-item center">
                        <wired-divider class="form-divider"></wired-divider>
                    </div>

                    <div class="form-item center">
                        <wired-button @click="start" :disabled="!hasFile">Let's Rock It !!!</wired-button>
                    </div>
                </wired-card>
            </div>
        </main>
    </div>
</template>

<script>
    import "wired-elements"

    import logic from './utils/logic'

    export default {
        name: 'app',
        data() {
            return {
                hasFile: false,
                fileContent: '',
            }
        },
        methods: {
            chooseFile() {
                const file = this.$refs.fileInput.files[0]
                const reader = new FileReader()
                reader.onload = (e) => {
                    this.fileContent = e.target.result
                }
                reader.readAsText(file)

                this.hasFile = true
            },
            start() {
                if (!this.hasFile) {
                    return
                }

                // Start to analyze
                logic(this.fileContent, this.$refs.internalReference.value, this.$refs.controlSampleName.value)

                this.hasFile = false
            }
        }
    }
</script>

<style lang="scss">
    @font-face {
        font-family: 'handwrite';
        src: url('./fonts/SCRIPTIN.ttf') format('ttf'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    * {
        margin: 0;
        padding: 0;
    }
    main {
        margin-top: 20vh;
        display: flex;
        align-items: start;
        justify-content: center;
        height: 60vh;
    }

    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .calendar-wrapper {
        margin-right: 40px;
    }

    .form-wrapper {
        height: 320px;
        width: 300px;

        .form {
            height: 100%;
            width: 100%;

            .file-wrapper {
                position: relative;

                .hidden-file-wrapper {
                    position: absolute;
                    left: 0;
                    top: 0;
                    opacity: 0;
                }
            }

            &-item {
                margin-bottom: 8px;
            }

            &-divider {
                margin: 8px;
                width: 250px;
            }
        }
    }
</style>
