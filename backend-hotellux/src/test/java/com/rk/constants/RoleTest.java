package com.rk.constants;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class RoleTest {

    @Test
    public void testEnumValues() {
        // Verify that all expected enum values are present
        Role[] expectedRoles = Role.values();
        assertArrayEquals(new Role[]{
                Role.ADMIN, Role.MANAGER, Role.STAFF, Role.GUEST,
                Role.RECEPTIONIST, Role.HOUSEKEEPING, Role.CHEF, Role.MAINTENANCE,
                Role.SECURITY, Role.INVENTORY, Role.PR, Role.ANALYSER,
                Role.EVENTMANAGEMENT, Role.MARKETING, Role.SUPPORT, Role.SALES, Role.HR
        }, expectedRoles);
    }

    @Test
    public void testEnumValuesOrder() {
        // Verify that the enum values are in the expected order
        assertEquals(Role.ADMIN, Role.values()[0]);
        assertEquals(Role.HR, Role.values()[16]);
    }

    @Test
    public void testEnumName() {
        // Verify that the name of each enum constant is as expected
        assertEquals("ADMIN", Role.ADMIN.name());
        assertEquals("MANAGER", Role.MANAGER.name());
        assertEquals("STAFF", Role.STAFF.name());
        assertEquals("GUEST", Role.GUEST.name());
        // Add additional assertions for each enum constant as needed
    }

    @Test
    public void testEnumFromString() {
        // Test conversion from string to enum
        assertEquals(Role.ADMIN, Role.valueOf("ADMIN"));
        assertEquals(Role.MANAGER, Role.valueOf("MANAGER"));
        assertEquals(Role.STAFF, Role.valueOf("STAFF"));
        // Add additional assertions for each enum constant as needed

        // Test invalid string (expect IllegalArgumentException)
        assertThrows(IllegalArgumentException.class, () -> Role.valueOf("INVALID_ROLE"));
    }
}
