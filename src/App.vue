<template>
    <div id="app">
        <div>
            <wired-calendar></wired-calendar>
        </div>

        <div>
            <wired-card elevation="2" class="form">
                <div class="file-wrapper form-item">
                    <wired-button>选一个CSV文件吧~</wired-button>
                    <span class="hidden-file-wrapper">
                        <input ref="fileInput" name="csvFile" type="file" @change="chooseFile">
                    </span>
                </div>

                <div class="form-item">
                    <wired-input ref="internalReference" placeholder="Internal Reference" type="text"></wired-input>
                </div>
                <div class="form-item">
                    <wired-input ref="controlSampleName" placeholder="Control Sample" type="text"></wired-input>
                </div>

                <div class="form-item">
                    <wired-divider class="form-divider"></wired-divider>
                </div>

                <div class="form-item">
                    <wired-button @click="start" :disabled="!hasFile">Let's Rock It !!!</wired-button>
                </div>
            </wired-card>
        </div>
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

<style lang="scss"></style>
