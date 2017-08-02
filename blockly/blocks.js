Blockly.Blocks['g3_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_G3_NEW, "G3 ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14", "14"],
        ["15", "15"],
        ["16", "16"]
      ]), "rx_")
      .appendField(Blockly.Msg.WEBDUINO_G3_TX, "pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14", "14"],
        ["15", "15"],
        ["16", "16"]
      ]), "tx_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['g3_get'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("g3"), "var_");
    this.appendValueInput("time")
      .setCheck("Number")
      .appendField(Blockly.Msg.WEBDUINO_G3_GET, "get PM2.5 and PM10 over every ");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_G3_GET_TIME, "ms ( 1/1000 sec )");
    this.appendStatementInput("do")
      .appendField(Blockly.Msg.WEBDUINO_G3_GET_DO, "do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['g3_read'] = {
  init: function () {
    this.setCommentText('此積木會將動作寫入開發板，瀏覽器關閉後仍會持續運行');
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_G3_FIRMWARE,"硬體設定")
      .appendField(new Blockly.FieldVariable("g3"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_G3_READ, "get PM2.5 and PM10");
    this.appendStatementInput("do")
      .appendField(Blockly.Msg.WEBDUINO_G3_GET_DO, "do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['g3_trigger'] = {
  init: function() {
    this.setCommentText('此積木會將動作寫入開發板，瀏覽器關閉後仍會持續運行');
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_G3_FIRMWARE,"硬體設定")
        .appendField(new Blockly.FieldVariable("g3"), "g3")
        .appendField(Blockly.Msg.WEBDUINO_G3_TIMER)
        .appendField(new Blockly.FieldDropdown([["on", "true"], ["off", "false"]]), "state")
        .appendField(Blockly.Msg.WEBDUINO_G3_INTERVAL)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["3", "3"], ["5", "5"], ["10", "10"], ["30", "30"], ["60", "60"], ["180", "180"]]), "delaySec")
        .appendField(Blockly.Msg.WEBDUINO_G3_RUN)
        .appendField(new Blockly.FieldDropdown([["無限", "-1"]]), "repeatTime")
        .appendField(Blockly.Msg.WEBDUINO_G3_TIMES);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://webduino.io/');
  }
};

Blockly.Blocks['g3_get_number'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("g3"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_G3_GET_NOW, "測得目前的")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_G3_GET_PM25, "pm25"],
        [Blockly.Msg.WEBDUINO_G3_GET_PM10, "pm10"]
      ]), "g3_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('https://webduino.io');
  }
};