export default class UserInfo {
    constructor({nameSelector, jobSelector}) {
        this._profileName = document.querySelector(nameSelector);
        this._profileJob = document.querySelector(jobSelector);
    }

    getUserInfo() {
        // returns an object with the values of the input fields
        return {
            name: this._profileName.textContent,
            job: this._profileJob.textContent
        }
    }

    setUserInfo({name, job}) {
        this._profileName.textContent = name;
        this._profileJob.textContent = job;
    }
}