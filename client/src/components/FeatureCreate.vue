<template>
    <div class="container">
        <div class="selector">
            <span class="head">Type: </span>
            <el-select v-model="type" placeholder="Please select">
                <el-option 
                    v-for="type in types" 
                    :key="type.id"
                    :value="type.lable"
                >
                    <el-tooltip class="item" effect="dark" :content="type.description" placement="right">
                        <div>
                            {{ type.lable }}
                        </div>
                    </el-tooltip>
                </el-option>
            </el-select>
            <el-button type="primary" @click="submit">Add</el-button>
        </div>
        <div class="reg">
            <span class="head">Reg: </span>
            <el-input type="text" placeholder="Input reg" v-model="reg" ></el-input>
        </div>
        <div class="description">
            <span class="head">Description: </span>
            <el-input
                type="text"
                placeholder="Input description of the feature"
                v-model="description"
            >
            </el-input>
        </div>
    </div>
</template>

<script>
export default {
    name: "FeatureCreate",
    data() {
        return {
            types: [
                {
                    id: 1,
                    lable: "hot",
                    description: "访问系统敏感文件和目录的次数，连续，范围是 [0, 101]",
                },
                {
                    id: 2,
                    lable: "num_failed_logins",
                    description: "登录尝试失败的次数。连续，[0, 5]",
                },
                {
                    id: 3,
                    lable: "logged_in",
                    description: "成功登录则为1，否则为0，离散，0或1",
                },               
                {
                    id: 4,
                    lable: "num_compromised",
                    description: "compromised condition（目标系统出现不正常的状态，例如文件或路径” not found “，或使用“jump to” 跳转指令等）出现的次数，连续，[0, 7479]",
                },
                {
                    id: 5,
                    lable: "root_shell",
                    description: "若获得root shell 则为1，否则为0，离散。root_shell是指获得超级用户权限",
                },
                {
                    id: 6,
                    lable: "su_attempted",
                    description: "若出现”su root” 命令则为1，否则为0，离散",
                },
                {
                    id: 7,
                    lable: "num_root",
                    description: "用户访问次数，连续，[0, 7468]",
                },
                {
                    id: 8,
                    lable: "num_file_creations",
                    description: "文件创建操作的次数，连续，[0, 100]",
                },
                {
                    id: 9,
                    lable: "num_shells",
                    description: "使用shell命令的次数，连续，[0, 5]",
                },
                {
                    id: 10,
                    lable: "num_access_files",
                    description: "访问控制文件的次数，连续，[0, 9]。例如对 /etc/passwd 或 .rhosts 文件的访问",
                },
                {
                    id: 11,
                    lable: "num_outbound_cmds",
                    description: "一个FTP会话中出站连接的次数，连续，0。数据集中这一特征出现次数为0",
                },
                {
                    id: 12,
                    lable: "is_hot_login",
                    description: "登录是否属于“hot”列表（”hot”列表有的资料解释为授权主机列表，这里我认为解释为授权用户更为合适。），是为1，否则为0，离散，0或1。例如超级用户或管理员登录",
                },
                {
                    id: 13,
                    lable: "is_guest_login",
                    description: "若是guest 登录则为1，否则为0，离散，0或1",
                },
],
            type: "",
            reg: "",
            description: "",
        };
    },
    methods: {
        submit() {
            if (this.type == "" || this.reg == "") {
                this.$message({
                    message: "请输入完整参数",
                    type: "warning",
                    duration: 1500
                })
                return;
            }
                
            this.$axios({
                method: "post",
                url: "/feature",
                data: {
                    "type": this.type,
                    "reg": this.reg,
                    "description": this.description
                }
            })
            .then(res => {
                if (res.status == 200) {
                    // call parent method to refresh
                    this.$emit("refreshList");

                    this.type = "";
                    this.reg = "";
                    this.description = "";
                }
                else {
                    console.log("Insert err!")
                }
            })
            .catch(err => {
                console.log("Cannot fetch data")
            })
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    box-sizing: border-box;
    border: 2px solid rgb(0, 0, 0);
    font-size: 14px;
    text-align: left;
    padding: 8px;
    margin: 8px 0px;
    width: auto;
    line-height: 22px;
}
</style>