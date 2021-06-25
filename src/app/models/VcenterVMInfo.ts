

export default interface VcenterVMSummary{
  vm : String
  name : String
  powerState : VcenterVmPowerState;
  cpuCount : Number;
  memorySizeMiB :  Number;
}

