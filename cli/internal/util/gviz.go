package util

import (
	"os/exec"
)

// HasGraphViz checks for the presence of https://graphviz.org/
func HasGraphViz() bool {
	err := exec.Command("dot", "-v").Run()
	return err == nil
}
