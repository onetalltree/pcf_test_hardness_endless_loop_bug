# pcf_test_hardness_endless_loop_bug

When an output property is changed, the PCF test harness sees the change and triggers a call to updateView, even though the property is marked as "output".

Seems like changes to output properties shouldn't trigger an updateView