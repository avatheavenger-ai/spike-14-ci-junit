import { test } from 'node:test';
import assert from 'node:assert';

// Remote-set tests: in a real component these need CI-only secrets or services.
test('W7_S12_rejects_wrong_password', () => {
  assert.equal(login('ann', 'wrong'), false);
});

test('W7_S13_locks_after_five_failures', () => {
  // Fails on purpose: the spike must read a failure too.
  assert.equal(failuresBeforeLock(), 5);
});

test('W7_S14_remembers_device', { skip: 'needs a device' }, () => {});

function login(user, password) { return password === 'secret'; }
function failuresBeforeLock() { return 3; }
