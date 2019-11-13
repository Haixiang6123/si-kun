<template>
    <div id="app">
        <div class="star center">
            <img class="sun" src="./assets/sun.png" alt="sun-moon">
        </div>
        <main class="center">
            <div class="form-wrapper center">
                <wired-card elevation="2" class="form center">
                    <div class="file-wrapper form-item center">
                        <wired-button>{{fileName}}</wired-button>
                        <span class="hidden-file-wrapper">
                        <input ref="fileInput" name="csvFile" type="file" @change="chooseFile">
                    </span>
                    </div>

                    <div class="form-item center">
                        <wired-input ref="internalReference" class="form-item-input" placeholder="Internal Reference" type="text"></wired-input>
                    </div>
                    <div class="form-item center">
                        <wired-input ref="controlSampleName" class="form-item-input" placeholder="Control Sample" type="text"></wired-input>
                    </div>

                    <div class="form-item center">
                        <wired-divider class="form-divider"></wired-divider>
                    </div>

                    <div class="form-item center">
                        <wired-button @click="start" :disabled="!hasFile">Let's Rock It !!!</wired-button>
                    </div>
                </wired-card>
            </div>

            <div class="calendar-wrapper">
                <wired-calendar :selected="today"></wired-calendar>
            </div>
        </main>

        <wired-divider class="global-divider"></wired-divider>

        <p class="saying">{{quote}}</p>
        <p class="author">——{{author}}</p>

        <wired-dialog :open="isLoading">
            <div style="display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 16px;">
                <p style="font-family: 'cn-handwrite',serif; font-size: 2em; font-weight: bold">加载中...</p>
                <wired-spinner spinning duration="1000"></wired-spinner>
            </div>
        </wired-dialog>

        <wired-dialog :open="hasError">
            <div style="display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 16px;">
                <p style="font-family: 'cn-handwrite',serif; font-size: 2em; font-weight: bold">出错啦 :(</p>
                <wired-button style="margin-top: 8px" @click="hasError = false">好</wired-button>
            </div>
        </wired-dialog>
    </div>
</template>

<script>
    import "wired-elements"
    import axios from 'axios'

    import logic from './utils/logic'

    export default {
        name: 'app',
        data() {
            return {
                hasFile: false,
                fileContent: '',
                today: '',
                fileName: '选一个CSV文件吧~',
                hasError: false,
                isLoading: false,
                loadingStatus: 0,
                quote: '',
                author: '',
            }
        },
        mounted() {
            const today = new Date()
            const info = today.toString().split(' ')
            this.today = `${info[1]} ${today.getDate()}, ${today.getFullYear()}`

            this.getQuote()
        },
        methods: {
            async getQuote() {
                const response = await axios.get('https://api.quotable.io/random')

                this.quote = response.data.content
                this.author = response.data.author
            },
            chooseFile() {
                const fileInput = this.$refs.fileInput

                if (!fileInput.files || fileInput.files.length === 0) {
                    this.hasError = true
                    this.hasFile = false
                    return
                }

                const file = this.$refs.fileInput.files[0]
                this.fileName = '已选：' + (file.name.length > 9 ? `${file.name.substring(0, 10)}...` : file.name)

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
                try {
                    this.isLoading = true
                    logic(this.fileContent, this.$refs.internalReference.value, this.$refs.controlSampleName.value)
                }
                catch(e) {
                    this.hasError = true
                    console.error(e)
                }

                this.isLoading = false
            }
        }
    }
</script>

<style lang="scss">
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    * {
        margin: 0;
        padding: 0;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: #fbffe1;
    }

    .star {
        margin-bottom: 8px;
        & > img {
            width: 140px;
            &.sun {
                animation: spin 5s infinite linear;
            }
        }
    }

    main {
        display: flex;
        align-items: start;
        justify-content: center;
    }

    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .calendar-wrapper {
        margin-left: 40px;
    }

    .form-wrapper {
        height: 320px;
        width: 300px;
        background: #fff;

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
                    > input {
                        height: 39px;
                    }
                }
            }

            &-item {
                margin-bottom: 8px;
                &-input {
                    padding: 6px;
                }
            }

            &-divider {
                margin: 8px;
                width: 250px;
            }
        }
    }

    .global-divider {
        margin: 16px 0;
    }

    .saying {
        letter-spacing: .1em;
        line-height: 1.3;
        max-width: 660px;
        font-family: 'en-handwrite', 'cn-handwrite', serif;
        font-weight: bold;
    }

    .author {
        letter-spacing: .1em;
        text-align: right;
        margin-top: 8px;
        font-family: 'en-handwrite', 'cn-handwrite', serif;
        font-weight: bold;
    }
</style>
