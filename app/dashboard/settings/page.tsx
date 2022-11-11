import Transition from "../../../components/Transition";

const Settings = () => (
  <Transition>
    <h1 className="mb-4">Settings</h1>
    <div>
      <input type="text" />
      <div className="mb-2 rounded border border-red-600 bg-gray-500 p-4">
        This is some setting shit info
      </div>
    </div>
  </Transition>
);
export default Settings;
